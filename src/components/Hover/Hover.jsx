import './Hover.css'


const colors=['var(--color-orange)','var(--color-red)','var(--color-pink)','var(--color-purple)','var(--color-blue)','var(--color-green)','var(--color-navy)']
const Hover = ({info}) => {
    const {term,title,description,potencyLevels} = info;
  return (
    <div className="hover-container mb-3">
      <p className='hover-text'><strong>{term}</strong> {title}</p>
      <div className='d-flex gap-2 mb-2'>
        {potencyLevels.map((level,id) => (<span key={id} className='level mb-2' style={{color:colors[id]}}>
          {`${level}+`}
        </span>))}
      </div>
      <p>{description}</p>
    </div>
  )
}

export default Hover
