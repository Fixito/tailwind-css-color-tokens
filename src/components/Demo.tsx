export function Demo(props: React.ComponentProps<"div">) {
  return (
    <div {...props}>
      <div className="bg-subtle py-6 sm:py-12">
        <div className="mx-auto max-w-4xl p-6 sm:p-8">
          <div className="rounded border border-muted bg-neutral p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted">
              Special Deal
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-copy sm:text-3xl">
              Opportunity of a lifetime
            </h2>
            <p className="mt-4 text-subtle">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates sint dicta quas explicabo rem quisquam consectetur
              aperiam facere temporibus aut. Voluptatibus minus nesciunt qui
              voluptas fugiat voluptate repudiandae error asperiores.
            </p>

            <a
              href="#"
              className="mt-6 inline-block rounded bg-bold px-4 py-2 text-sm font-medium text-inverted hover:bg-neutral-inverted"
            >
              Learn more
            </a>
          </div>
          <div className="mt-6 grid gap-6 sm:mt-8 sm:grid-cols-2 sm:gap-8">
            <div className="grid place-items-center rounded bg-highlight px-8 py-12">
              <span className="text-sm font-medium uppercase tracking-widest text-copy/60">
                Conversion rate
              </span>
              <span className="text-4xl font-black text-copy sm:text-6xl">
                9.86%
              </span>
            </div>
            <div className="grid place-items-center rounded bg-accent px-8 py-12">
              <span className="text-sm font-medium uppercase tracking-widest text-inverted/60">
                customers
              </span>
              <span className="text-4xl font-black text-inverted sm:text-6xl">
                1M+
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
