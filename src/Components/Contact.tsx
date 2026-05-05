import { useEffect, useState } from "react"
import "./Contact.css"

const API_URL = import.meta.env.VITE_API_URL

interface ContactItem {
  key: string
  value: string
}

const Contact = () => {
  const [contacts, setContacts] = useState<ContactItem[]>([])

  useEffect(() => {
    fetch(`${API_URL}/content/contact`)
      .then((res) => res.json())
      .then((data) => setContacts(data))
  }, [])

  const getValue = (key: string) =>
    contacts.find((c) => c.key === key)?.value || ""

  const whatsapp = getValue("whatsapp")
  const email = getValue("email")
  const phone = getValue("phone")

  return (
    <section className="contact">
      <div>
        <h2> Contacto</h2>

        <div className="contact-links">
          {whatsapp && (
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              📱 WhatsApp
            </a>
          )}

          {email && <a href={`mailto:${email}`}>📧 Email</a>}

          {phone && <a href={`tel:${phone}`}>📞 Llamar</a>}
        </div>
      </div>
    </section>
  )
}

export default Contact
