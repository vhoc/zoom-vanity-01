import LinksMenu from "../LinksMenu/LinksMenu"

const Body = ( { backgroundImage, backgroundPosition, backgroundRepeat, backgroundSize, foregroundColor } ) => {

    return(
        <div
            className="border h-full w-full flex flex-col justify-center items-center p-5"
            style={
                {
                    backgroundImage: `url( ${ backgroundImage } )`,
                    backgroundPosition: backgroundPosition,
                    backgroundRepeat: backgroundRepeat,
                    backgroundSize: backgroundSize,
                    color: foregroundColor,
                }
            }
        >

            <LinksMenu
                backgroundRgba={ `rgba( 255, 255, 255, 0.5 )` }
            />

        </div>
    )

}

export default Body