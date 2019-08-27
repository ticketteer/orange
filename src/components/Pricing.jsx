import React from 'react'

const Price = ({ plan, site, curPeriod, t }) => (
  <div>
    <h2 className="h5 rate">
      {site.currency_symbol}
      <span className="price" data-annually={plan.plan_price_annually} data-monthly={plan.plan_price_monthly}>
        {curPeriod === 'annually' ? plan.plan_price_annually : plan.plan_price_monthly}
      </span>
    </h2>
    <div className="rate-desc">
      {t['per_month']}
      <br />
      {curPeriod === 'annually' ? t['at_annual_payment'] : null}
    </div>
  </div>
)

const PricingPlan = ({ plan, ...props }) => (
  <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
    <div className="crumina-module crumina-pricing-tables-item pricing-tables--item-with-thumb" data-mh="pricing">
      <div className="pricing-thumb">
        <img src={plan.img.url} alt="rocket" className="icon-img" />
        <img className="cloud" src="img/clouds8.png" alt="cloud" />
      </div>

      <div className="main-pricing-content">
        <div className="h5 pricing-title">
          {plan.plan_title.text}
        </div>

        <div
          className="pricing-description"
          dangerouslySetInnerHTML={{ __html: plan.plan_features.html }}
        />
        {plan.plan_price_monthly && plan.plan_price_monthly.length > 0
          ? <Price plan={plan} {...props} />
          : null
        }
      </div>

      <div>
        <button className="more-arrow">
          <span>{plan.plan_cta_title}</span>
          <div className="btn-next">
            <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
            <svg className="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
          </div>
        </button>
      </div>
    </div>
  </div>
)

export default class Pricing extends React.Component {

  state = {
    curPeriod: 'annually'
  }

  handleTogglePeriod = () => this.setState({ curPeriod: this.state.curPeriod === 'annually' ? 'monthly' : 'annually' })

  render () {
    const { site, pageContext: { t } } = this.props
    const { curPeriod } = this.state
    return (
      <section className="medium-padding120 crumina-pricings" id="pricing">
        <div className="container">
          <div className="row mb60">
            <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-12 col-xs-12 align-center">
              <div className="crumina-module crumina-heading">
                <h2 className="heading-title">{t['pricing']}</h2>
              </div>
              <label className="tgl tgl--text-both">
                <input type="checkbox" onChange={this.handleTogglePeriod} checked={curPeriod === 'annually'} />
                <span className="js-pricing-switcher" data-on={t['annually']} data-off={t['monthly']}></span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="pricing-wrap">
              {site.pricing_plans.map((plan, index) =>
                <PricingPlan plan={plan} t={t} curPeriod={curPeriod} site={site} key={`${plan.plan_title}${index}`} />
              )}
            </div>
          </div>
        </div>
        <div className="pricing-footnote" dangerouslySetInnerHTML={{ __html: site.pricing_footnote.html }} />
      </section>
    )
  }
}
