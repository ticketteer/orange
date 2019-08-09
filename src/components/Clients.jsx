import React from 'react'

const Client = ({ client }) => (
  <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
    <a href={client.link ? client.link.url : ''} target="_blank" rel="noopener noreferrer" className="clients-item">
      <img src={client.image.url} alt={client.name} />
    </a>
  </div>
)

export default ({ site: { clients }}) => {
  return (
    <section className="crumina-module tt-clients background-contain bg-yellow">
      <div className="container">
        <div className="row">
          { clients.map(client =>
            <Client key={client.name} client={client} />
          )}
        </div>
      </div>
    </section>
  )
}
