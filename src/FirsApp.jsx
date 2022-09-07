import React from 'react'
import PropTypes  from 'prop-types'

const FirsApp = ({title , subtitle}) => {
  return (
    <>
        <h1>{title}</h1>
        <p>{subtitle}</p>
    </>
  )
}
FirsApp.propTypes = {
    title:    PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}
FirsApp.defaultProps = {
    title:    'Sin titulo',
    subtitle: 'Sin subtitulo'
}
export default FirsApp