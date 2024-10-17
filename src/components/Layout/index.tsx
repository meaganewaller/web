const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="page-layout">
        <div className="page-layout-inner">
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

export default PageLayout
