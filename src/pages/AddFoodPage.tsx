import { useNavigate } from 'react-router-dom'
import { AddFoodPanel } from '../components/AddFoodPanel'
import { frequentFoods, mealOptions } from '../data/nutrition'

export function AddFoodPage() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/nutricion')
  }

  return (
    <div className="add-food-page">
      <AddFoodPanel mealOptions={mealOptions} frequentFoods={frequentFoods} onClose={handleBack} />
    </div>
  )
}
