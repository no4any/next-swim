export default function DefaultContainer({children, isFluid}: {children:React.ReactNode, isFluid?: boolean}) {
    return <div className={isFluid?"container-fluid":"container"}>
        <div className="row">
            <div className="col">
                {children}
            </div>
        </div>
    </div>
}