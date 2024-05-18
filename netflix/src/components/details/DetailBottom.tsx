interface DetailBottomProps {
  overview: string;
}

export default function DetailBottom({ overview }: DetailBottomProps) {
  return (
    <section>
      <p className="fonts-details mt-6">{overview}</p>
    </section>
  )
}
