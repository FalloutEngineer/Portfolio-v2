import Link from "next/link"

type ConditionalWrapperProps = {
  condition: boolean
  href: string
  children: React.ReactNode
}

const ConditionalLinkWrapper = ({
  condition,
  href,
  children,
}: ConditionalWrapperProps) => {
  return condition ? (
    <Link href={href} passHref target="_blank">
      <div>{children}</div>
    </Link>
  ) : (
    <>{children}</>
  )
}

export default ConditionalLinkWrapper
