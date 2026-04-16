'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Mail, Lock, User, UserPlus, AlertCircle } from 'lucide-react';
import styles from './Auth.module.css';

export default function SignupPage() {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      if (users.find((u: any) => u.email === data.email)) {
        setError('User already exists with this email.');
        setIsLoading(false);
        return;
      }

      users.push({
        email: data.email,
        password: data.password,
        name: data.name
      });

      localStorage.setItem('users', JSON.stringify(users));
      router.push('/login');
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
          <h1>Create Account</h1>
          <p>Join us to build your dreams</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
          <div className={styles.formGroup}>
            <label><User size={16} /> Full Name</label>
            <div className={styles.inputWrapper}>
              <User className={styles.inputIcon} size={18} />
              <input 
                type="text" 
                {...register('name', { required: 'Name is required' })} 
                placeholder="Enter your name"
              />
            </div>
            {errors.name && <span className={styles.errorText}>{errors.name.message as string}</span>}
          </div>

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
            <label><Lock size={16} /> Create Password</label>
            <div className={styles.inputWrapper}>
              <Lock className={styles.inputIcon} size={18} />
              <input 
                type="password" 
                {...register('password', { 
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Password must be at least 6 characters' }
                })} 
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
            {isLoading ? 'Creating account...' : (
              <>
                <UserPlus size={20} />
                Sign Up
              </>
            )}
          </button>
        </form>

        <div className={styles.authFooter}>
          Already have an account? <Link href="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
}
