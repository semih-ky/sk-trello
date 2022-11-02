import { userIcon } from '../../../icons/userIcon'
import { Icon } from '../Icon'
import './styles.css'

export const Avatar = () => {
  return (
    <div className='avatar'>
      <Icon svg={userIcon} />
    </div>
  )
}
