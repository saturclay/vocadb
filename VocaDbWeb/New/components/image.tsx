import React from "react"
import Image, { ImageProps } from "next/image"

interface CustomImageProps extends Omit<ImageProps, "src"> {
  src: string | undefined
  mode?: "crop"
}

export default function CustomImage(props: CustomImageProps) {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      src={props.src ?? "/unknown.webp"}
      width={props.width}
      height={props.height}
      loader={(loaderProps) => {
        let baseOverride
        if (
          loaderProps.src === "/unknown.png" ||
          loaderProps.src === "/unknown.webp" ||
          props.src === undefined
        ) {
          baseOverride = "https://vocadb.vercel.app/unknown.webp"
        }

        let base = baseOverride
          ? baseOverride
          : `//wsrv.nl/?url=${loaderProps.src.startsWith("/")
            ? process.env.NEXT_PUBLIC_API_URL?.replace("/api", "")
            : ""
          }${loaderProps.src}&output=webp`

        if (props.mode === "crop") {
          base += "&fit=cover&a=attention"
        }
        if (props.width) {
          base += "&w=" + props.width
          base += "&h=" + props.height
        }

        return base
      }}
    />
  )
}
