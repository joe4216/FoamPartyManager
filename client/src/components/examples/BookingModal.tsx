import BookingModal from '../BookingModal'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function BookingModalExample() {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)}>Open Booking Modal</Button>
      <BookingModal 
        open={open} 
        onOpenChange={setOpen}
        selectedPackage="Standard Party"
      />
    </div>
  )
}
