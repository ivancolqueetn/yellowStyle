export function Details({details,checkIcon}) {
    return (
        <div className="flex flex-col gap-4">
            {
                details.map(detail=>
                    <div className="flex gap-4" key={detail.legend}>
                        <img src={checkIcon} alt="" />
                        <h4>{detail.legend}</h4>
                    </div>
                )
            }
        </div>
    )
}