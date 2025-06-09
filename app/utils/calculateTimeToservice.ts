import { SetStateAction } from "react"

export const calculateTimeToService = (setTimeToService:React.Dispatch<SetStateAction<string>>)=> {
  const now = new Date()
  const nextSunday = new Date()
  const daysUntilSunday = (7 - now.getDay()) % 7
  nextSunday.setDate(
    now.getDate() + (daysUntilSunday === 0 ? 7 : daysUntilSunday),
  )
  nextSunday.setHours(10, 0, 0, 0) // 10 AM service
  const diff = nextSunday.getTime() - now.getTime()
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  )
  if (days === 0 && hours <= 2) {
    setTimeToService('Service starting soon!')
  } else if (days === 0) {
    setTimeToService(`${hours} hours until service`)
  } else {
    setTimeToService(`${days} days until Sunday service`)
  }
}

export const getNextSundaysDate = ()=>{
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const daysUntilNextSunday = (7 - dayOfWeek) % 7 || 7;
  
  const nextSunday = new Date(now);
  nextSunday.setDate(now.getDate() + daysUntilNextSunday);
  
  const month = nextSunday.toLocaleString('default', { month: 'short' });
const day = nextSunday.getDate(); 
  
return {
  month: month,
  day:day
}
  
}