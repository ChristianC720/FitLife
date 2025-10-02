"use client"

import type React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Eye, EyeOff, Mail, Lock } from "lucide-react"

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login:", { email, password })
  }

  return (
    <div className="auth-page">
      <div className="auth-container">
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          <span>Volver al inicio</span>
        </Link>

        <div className="auth-content">
          <div className="auth-header">
            <h1>Bienvenido a FitLife</h1>
            <p>Inicia sesión para continuar con tu viaje de bienestar</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-section">
              <h2>Iniciar Sesión</h2>
              <p className="form-subtitle">Ingresa tus credenciales para acceder a tu cuenta</p>
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <div className="input-wrapper">
                <Mail className="input-icon" size={18} />
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <div className="input-wrapper">
                <Lock className="input-icon" size={18} />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <Link to="/recuperar-contrasena" className="forgot-password">
              ¿Olvidaste tu contraseña?
            </Link>

            <button type="submit" className="auth-submit-button">
              Iniciar Sesión
            </button>

            <p className="auth-footer">
              ¿No tienes una cuenta?{" "}
              <Link to="/registro" className="auth-link">
                Regístrate aquí
              </Link>
            </p>

            <div className="demo-info">
              <strong>Demo:</strong> demo@fitlife.com / demo123
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
