import React, { PureComponent } from 'react'

export default class SignupEmail extends PureComponent {

  state = {
    value: '',
    loading: false,
  }

  handleChange = ({ target }) =>
    this.setState({ value: target.value })

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ loading: true })
    fetch('https://dashboard.ticketteer.com/api/users/si', {
      method: 'post',
      body: JSON.stringify({ email: this.state.value })
    })
    window.location.href = `https://dashboard.ticketteer.com/auth/signup?e=${this.state.value}`
  }

  handleClose = () => {
    this.domRef.className = 'signup-email-wrap'
  }

  render() {
    const { pageContext: { t } } = this.props
    return (
      <div className="signup-email-wrap" id="signup-email" ref={r => this.domRef = r}>
        <div className="signup-email-form">
          <div>
            <div className="desc">{t['signup_for_free_and_start_using_tt']}</div>
            <form onSubmit={this.handleSubmit}>
              <div className="form-control-wrap">
                <input type="email" value={this.state.value} onChange={this.handleChange} placeholder={t['email']} />
              </div>
              <button className="signup-email-btn btn btn--orange" type="submit" disabled={this.state.loading}>
                {this.state.loading ? '...' : t['start_tt']}
              </button>
            </form>
          </div>
        </div>
        <div className="close" onClick={this.handleClose}>
          <svg className="utouch-icon utouch-icon-cancel-1">
            <use xlinkHref="#utouch-icon-cancel-1"></use>
          </svg>
        </div>
      </div>
    )
  }
}
