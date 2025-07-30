export default function CtaSection() {
  return (
    <section
      className='cta-section py-16 md:py-24 text-center'
      style={{
        background:
          'linear-gradient(135deg, var(--pastel-pink) 0%, #F8E8F0 100%)',
      }}
    >
      <div className='container max-w-[1200px] mx-auto px-5'>
        <div className='cta-content'>
          <h2
            className='font-crimson text-4xl md:text-5xl lg:text-6xl font-normal mb-6 italic'
            style={{ color: 'var(--text-dark)' }}
          >
            Ready to Connect Deeper?
          </h2>

          <p
            className='text-xl md:text-2xl mb-12 leading-relaxed'
            style={{ color: 'var(--text-light)' }}
          >
            Join thousands of couples deepening their connection.
          </p>

          <div className='price-display mb-12'>
            <span
              className='text-5xl md:text-6xl lg:text-7xl font-bold'
              style={{ color: 'var(--primary)' }}
            >
              €4.99
            </span>
            <span
              className='text-2xl md:text-3xl ml-2'
              style={{ color: 'var(--text-light)' }}
            >
              /month
            </span>
          </div>

          <a
            href='#signup'
            className='btn-primary inline-block px-12 py-4 rounded-full text-white font-medium text-xl transition-all duration-200 hover:opacity-90 hover:transform hover:scale-105'
            style={{
              backgroundColor: 'var(--primary)',
              marginTop: '2rem',
            }}
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
