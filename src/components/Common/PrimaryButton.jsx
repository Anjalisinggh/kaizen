function PrimaryButton({ children, className = '', variant = 'dark', href, onClick }) {
  const styles =
    variant === 'light'
      ? 'bg-white text-espresso shadow-[0_16px_36px_rgba(52,35,20,0.18)] hover:bg-ivory'
      : 'bg-espresso text-white shadow-[0_18px_42px_rgba(52,35,20,0.24)] hover:bg-cocoa'
  const classes = `group inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(122,86,55,0.32)] ${styles} ${className}`
  const content = (
    <>
      {children}
      <span className="ml-3 grid size-7 place-items-center rounded-full bg-sand/50 transition duration-300 group-hover:translate-x-1">
        -&gt;
      </span>
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classes}
    >
      {content}
    </button>
  )
}

export default PrimaryButton
