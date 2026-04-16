'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Mail, Lock, LogIn, AlertCircle } from 'lucide-react';
import styles from './Auth.module.css';

export default function LoginPage() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    setIsLoading(true);
    setError('');
    
    // Simulate network delay
    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: any) => u.email === data.email && u.password === data.password);

      if (user) {
        document.cookie = "auth_token=true; path=/";
        router.push('/');
        router.refresh();
      } else {
        setError('Invalid email or password. Please try again.');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className={styles.authWrapper}>
      <div className={styles.authCard}>
        <div className={styles.logoContainer}>
          <div className={styles.logoIcon}>
            <img src="/logo.png" alt="Logo" />
          </div>
          <div className={styles.brandName}>Structure <span>Buildify</span></div>
        </div>

        <div className={styles.authHeader}>
          <h1>Welcome Back</h1>
          <p>Please enter your details to sign in</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
          <div className={styles.formGroup}>
            <label><Mail size={16} /> Email Address</label>
            <div className={styles.inputWrapper}>
              <Mail className={styles.inputIcon} size={18} />
              <input 
                type="email" 
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })} 
                placeholder="name@company.com"
              />
            </div>
            {errors.email && <span className={styles.errorText}>{errors.email.message as string}</span>}
          </div>
          
          <div className={styles.formGroup}>
            <label><Lock size={16} /> Password</label>
            <div className={styles.inputWrapper}>
              <Lock className={styles.inputIcon} size={18} />
              <input 
                type="password" 
                {...register('password', { required: 'Password is required' })} 
                placeholder="••••••••"
              />
            </div>
            {errors.password && <span className={styles.errorText}>{errors.password.message as string}</span>}
          </div>

          {error && (
            <div className={styles.mainError}>
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          <button type="submit" className={styles.authButton} disabled={isLoading}>
            {isLoading ? 'Signing in...' : (
              <>
                <LogIn size={20} />
                Sign In
              </>
            )}
          </button>
        </form>

        <div className={styles.authFooter}>
          Don't have an account? <Link href="/signup">Create account</Link>
        </div>
      </div>
    </div>
  );
}
