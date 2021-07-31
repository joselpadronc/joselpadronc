import Link from 'next/link'


export default function PrimaryBtn({ routeBtn, textBtn, targetBtn }) {
  return (
    <Link href={routeBtn}>
      <a target={targetBtn} className="w-52 text-center	mt-6 px-6 py-2 rounded-lg bg-primary text-white font-semibold shadow-lg transition duration-200 ease-in-out focus:ring-4 focus:ring-green-400 focus:ring-opacity-30 hover:bg-opacity-95">
        {textBtn}
      </a>
    </Link>
  )
}