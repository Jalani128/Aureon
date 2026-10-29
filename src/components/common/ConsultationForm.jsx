import { useState } from 'react'
import { toast } from 'sonner'
import { LANDING_CTA_SERVICES } from '../../data/site'

export default function ConsultationForm({ defaultService = LANDING_CTA_SERVICES[0], defaultNotes = '' }) {
  const [sent, setSent] = useState(false)
  const [service, setService] = useState(defaultService)
  const [notes, setNotes] = useState(defaultNotes)

  if (sent) {
    return (
      <div className="form form--done">
        <h3>Thank you</h3>
        <p>An engineer will reply within one business day with a recommendation.</p>
      </div>
    )
  }
  return (
    <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); toast.success('Request sent', { description: 'An engineer will reply within one business day.' }) }}>
      <h3>Book a consultation</h3>
      <div className="form__row">
        <label>Full name<input required placeholder="Abdulrahman Al-Qahtani" /></label>
        <label>Company<input placeholder="Company name" /></label>
      </div>
      <label>Work email<input required type="email" placeholder="name@company.sa" /></label>
      <label>Service
        <select value={service} onChange={(e) => setService(e.target.value)}>
          {LANDING_CTA_SERVICES.map((s) => <option key={s}>{s}</option>)}
        </select>
      </label>
      <label>Scope notes
        <textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="What would you like to improve?" />
      </label>
      <button className="btn btn--dark btn--block" type="submit">Send request</button>
    </form>
  )
}
