"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

interface CreateGoalModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CreateGoalModal({ isOpen, onClose }: CreateGoalModalProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "",
    target: "",
    unit: "",
    deadline: "",
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Create goal:", formData)
    onClose()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content create-goal-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2>Crear Nueva Meta</h2>
            <p className="modal-subtitle">Define una meta personalizada para tu progreso</p>
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="goal-form">
          <div className="form-group">
            <label htmlFor="title">Título de la Meta</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Ej: Caminar 10,000 pasos diarios"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción (opcional)</label>
            <textarea
              id="description"
              name="description"
              placeholder="Describe tu meta..."
              value={formData.description}
              onChange={handleChange}
              rows={3}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="type">Tipo</label>
              <select id="type" name="type" value={formData.type} onChange={handleChange} required>
                <option value="">Seleccionar</option>
                <option value="steps">Pasos</option>
                <option value="weight">Peso</option>
                <option value="exercise">Ejercicio</option>
                <option value="nutrition">Nutrición</option>
                <option value="other">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="target">Objetivo</label>
              <input
                id="target"
                name="target"
                type="number"
                placeholder="1000"
                value={formData.target}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="unit">Unidad</label>
              <input
                id="unit"
                name="unit"
                type="text"
                placeholder="pasos, kg, ml..."
                value={formData.unit}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="deadline">Fecha límite</label>
              <input
                id="deadline"
                name="deadline"
                type="date"
                placeholder="dd/mm/aaaa"
                value={formData.deadline}
                onChange={handleChange}
              />
            </div>
          </div>

          <button type="submit" className="goal-submit-button">
            Crear Meta
          </button>
        </form>
      </div>
    </div>
  )
}
