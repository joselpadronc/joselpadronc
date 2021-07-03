// ASSETS
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'

export default function NetworksNav() {

  return (
    <nav className="fixed px-5 py-3 bottom-2 bg-white shadow-xl rounded-lg w-11/12 max-w-xs">
      <menu className="p-0 m-0 flex items-center justify-between">
        <a className="p-0 m-0 pointer" href="https://github.com/joselpadronc" target="_blank">
          <GitHubIcon />
        </a>
        <a className="p-0 m-0 pointer" href="https://www.linkedin.com/in/joselpadronc/" target="_blank">
          <LinkedInIcon />
        </a>
        <a className="p-0 m-0 pointer" href="https://twitter.com/joselpadronc" target="_blank">
          <TwitterIcon />
        </a>
        <a className="p-0 m-0 pointer" href="https://www.instagram.com/joselpadronc/" target="_blank">
          <InstagramIcon />
        </a>
      </menu>
    </nav>
  )
}
