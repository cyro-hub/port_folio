import React, { useState, useEffect } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'
import {
  collection,
  query,
  where,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
  orderBy,
  Timestamp,
  setDoc,
} from 'firebase/firestore'
import * as firebase from '../firebase'
import './css/register.scss'

function Contact() {
  const [warning, setWarning] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const [contact, setContact] = useState({
    name: '',
    message: '',
    comments: {},
  })
  const handleSubmit = (e) => {
    e.preventDefault()

    for (const key in contact) {
      if (contact[key] === '') {
        setWarning(`${key} is empty`)
        return
      }
    }
    setLoading(true)
    let references = collection(firebase.db, 'comments')
    addDoc(references, contact)
      .then(() => {
        setContact({
          name: '',
          message: '',
          comment: {},
        })
        setLoading(false)
        setSuccess('Sent successfully')
      })
      .catch((error) => {
        setLoading(false)
        setWarning('Unable to send contact')
      })
  }
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWarning('')
      setSuccess('')
    }, 4000)
  }, [warning, success])
  return (
    <section id="contact" className="register max_width">
      <h3>Contact</h3>
      <form onSubmit={(e) => handleSubmit(e, contact)}>
        {warning && <p className="warning">{warning}</p>}
        {success && <p className="success">{success}</p>}
        <input
          type="text"
          name="name"
          value={contact.name}
          placeholder="Name"
          autoComplete="off"
          onChange={(e) =>
            setContact({ ...contact, [e.target.name]: e.target.value })
          }
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          value={contact.message}
          placeholder="Message"
          autoComplete="off"
          onChange={(e) =>
            setContact({ ...contact, [e.target.name]: e.target.value })
          }
        ></textarea>
        <div>
          <button type={loading ? 'button' : 'submit'} className="submit">
            {loading ? (
              <BeatLoader color={'black'} loading={true} size={10} />
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Contact
