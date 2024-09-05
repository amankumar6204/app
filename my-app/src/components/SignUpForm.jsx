import { useState } from 'react'

const SignUpForm = () => {
  const EMAIL_REGEX = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/

  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [status, setStatus] = useState(false)
  const [success, setSuccess] = useState(false)

  const updateEmail = (value) => {
    setEmail(value)
    validateEmail(value)
  }

  const validateEmail = (email) => {
    if (!email.match(EMAIL_REGEX)) {
      setError(true)
      setStatus(true)
      return
    }
    setError(false)
    setStatus(false)
  }

  const handleDismiss = () => {
    setSuccess(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    validateEmail(email)

    if (!error && email.trim() !== '') {
      setSuccess(true)
      setEmail('')
    } else {
      setSuccess(false)
    }
  }

  return (
    <div className="wrapper">
      <main>
        {success ? (
          <div className="success">
            <div className="success__info">
              <div className="successs__image">
                <img
                  className="success-icon"
                  src="images/icon-success.svg"
                  alt="Success Icon"
                />
              </div>
              <h1 className="success__heading">Thanks for subscribing!</h1>
              <p className="success__description">
                A confirmation email has been sent to{' '}
                <strong>ash@loremcompany.com</strong>. Please open it and click
                the button inside to confirm your subscription.
              </p>
            </div>
            <button onClick={handleDismiss} className="success__button">
              Dismiss message
            </button>
          </div>
        ) : (
          <div className="layout">
            <section>
              <div className="newsletter-wrapper">
                <div className="signup">
                  <h1 className="signup__title">Stay updated!</h1>
                  <p className="signup__description">
                    Join 60,000+ product managers receiving monthly updates on:
                  </p>
                  <ul className="signup__features features">
                    <li className="feature__item feature__one">
                      <img src="images/icon-list.svg" alt="List Icon" />
                      Product discovery and building what matters
                    </li>
                    <li className="feature__item feature__two">
                      <img src="images/icon-list.svg" alt="List Icon" />
                      Measuring to ensure updates are a success
                    </li>
                    <li className="feature__item feature__three">
                      <img src="images/icon-list.svg" alt="List Icon" />
                      And much more!
                    </li>
                  </ul>
                </div>
                <div className="form-wrapper">
                  <form onSubmit={handleSubmit} className="form" action="">
                    <div className="label-wrapper">
                      <label htmlFor="email">Email address</label>
                      {status && <p>Valid email required</p>}
                    </div>
                    <input
                      className={status && 'email-error'}
                      onChange={(e) => updateEmail(e.target.value)}
                      type="email"
                      name="email"
                      value={email}
                      id="email"
                      placeholder="email@company.com"
                    />
                    <button type="submit">
                      Subscribe to monthly newsletter
                    </button>
                  </form>
                </div>
              </div>
            </section>
            <section>
              <div className="hero">
                <picture>
                  <source
                    srcSet="images/illustration-sign-up-mobile.svg"
                    media="(max-width: 800px)"
                  />
                  <img
                    className="hero__image"
                    src="images/illustration-sign-up-desktop.svg"
                    alt="Illustration Sign Up SVG"
                  />
                </picture>
              </div>
            </section>
          </div>
        )}
      </main>
    </div>
  )
}
export default SignUpForm
