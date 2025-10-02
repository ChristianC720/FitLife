"use client"

import type React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, Mail, Lock, Eye, EyeOff } from "lucide-react"

export function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    gender: "",
    fitnessLevel: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Register:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
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
            <h1>Únete a FitLife</h1>
            <p>Crea tu cuenta y comienza tu transformación hoy</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-section">
              <h2>Crear Cuenta</h2>
              <p className="form-subtitle">Completa la información para crear tu perfil personalizado</p>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">Nombre</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Juan"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Apellido</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Pérez"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <div className="input-wrapper">
                <Mail className="input-icon" size={18} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="age">Edad</label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  placeholder="25"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="gender">Género</label>
                <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                  <option value="">Seleccionar</option>
                  <option value="male">Masculino</option>
                  <option value="female">Femenino</option>
                  <option value="other">Otro</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="fitnessLevel">Nivel de Fitness</label>
              <select
                id="fitnessLevel"
                name="fitnessLevel"
                value={formData.fitnessLevel}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona tu nivel actual</option>
                <option value="beginner">Principiante</option>
                <option value="intermediate">Intermedio</option>
                <option value="advanced">Avanzado</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <div className="input-wrapper">
                <Lock className="input-icon" size={18} />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Mínimo 8 caracteres"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={8}
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

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
              <div className="input-wrapper">
                <Lock className="input-icon" size={18} />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Repite tu contraseña"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="form-checkbox">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                checked={formData.acceptTerms}
                onChange={handleChange}
                required
              />
              <label htmlFor="acceptTerms">
                Acepto los{" "}
                <Link to="/terminos" className="auth-link">
                  términos y condiciones
                </Link>{" "}
                y la{" "}
                <Link to="/privacidad" className="auth-link">
                  política de privacidad
                </Link>
              </label>
            </div>

            <button type="submit" className="auth-submit-button">
              Crear Cuenta
            </button>

            <p className="auth-footer">
              ¿Ya tienes una cuenta?{" "}
              <Link to="/login" className="auth-link">
                Inicia sesión aquí
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
