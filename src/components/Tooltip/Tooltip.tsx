// import React, {
//   CSSProperties,
//   Fragment,
//   useCallback,
//   useEffect,
//   useRef,
// } from 'react'
// import { createPortal } from 'react-dom'
// import styled from 'styled-components'

// export type VariationPlacement =
//   | 'top-start'
//   | 'top-end'
//   | 'bottom-start'
//   | 'bottom-end'
//   | 'right-start'
//   | 'right-end'
//   | 'left-start'
//   | 'left-end'
// export type AutoPlacement = 'auto' | 'auto-start' | 'auto-end'
// export type Placement = AutoPlacement | VariationPlacement

// // type Props = {
// //   label?: string
// //   children: React.ReactNode
// //   placement?: Placement
// //   rootTableTarget?: HTMLElement | null
// //   style?: CSSProperties
// // }

// // export const Tooltip = (props: Props) => {
// //   const { children, label, rootTableTarget, style } = props
// //   const refDom = useRef(document.createElement('div'))
// //   const isDomExist = useRef(false)
// //   const refRoot = useRef<HTMLDivElement>(null)
// //   const refTooltip = useRef<HTMLDivElement>(null)
// //   const refFrame = useRef<number>()
// //   const isOpen = useRef(false)

// //   const createDom = useCallback(() => {
// //     if (isDomExist.current) return
// //     isDomExist.current = true
// //     const dom = refDom.current
// //     dom.style.position = 'absolute'
// //     dom.style.width = '0px'
// //     dom.style.height = '0px'
// //     dom.style.left = '0px'
// //     dom.style.top = '0px'
// //     // eslint-disable-next-line unicorn/prefer-node-append
// //     document.querySelector('body')?.appendChild(dom)
// //   }, [])

// //   const definedPositionOption = useCallback(async () => {
// //     const tooltip = refTooltip.current
// //     const textContainer = refRoot.current
// //     if (!tooltip || !textContainer || !rootTableTarget) return
// //     const { top, height: h, left } = textContainer.getBoundingClientRect()
// //     const { width, height: hei } = rootTableTarget.getBoundingClientRect()
// //     const { height } = tooltip.getBoundingClientRect()
// //     if (textContainer.scrollWidth < width - 74) {
// //       tooltip.style.width = 'max-content'
// //     } else {
// //       tooltip.style.width = `${width - 74}px`
// //     }
// //     const topTooltip = top + h + 4

// //     if (topTooltip + height > window.innerHeight - hei - 51 - 24) {
// //       tooltip.style.top = `${top - height - 4}px`
// //       tooltip.style.setProperty('--flag-before', 'none')
// //       tooltip.style.setProperty('--flag-after', 'block')
// //     } else {
// //       tooltip.style.top = `${topTooltip}px`
// //       tooltip.style.setProperty('--flag-before', 'block')
// //       tooltip.style.setProperty('--flag-after', 'none')
// //     }
// //     tooltip.style.display = 'block'
// //     tooltip.style.left = `${left}px`
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, [])

// //   const listenerFrame = useCallback(() => {
// //     definedPositionOption()
// //     refFrame.current = window.requestAnimationFrame(listenerFrame)
// //   }, [definedPositionOption])

// //   const clearFrame = useCallback(() => {
// //     if (!refFrame.current) return
// //     window.cancelAnimationFrame(refFrame.current)
// //   }, [])

// //   const onClose = useCallback(() => {
// //     clearFrame()
// //     isOpen.current = false
// //     if (refTooltip.current) refTooltip.current.style.display = 'none'
// //   }, [clearFrame])

// //   useEffect(() => {
// //     const dom = refDom.current
// //     return () => {
// //       if (isDomExist.current) {
// //         onClose()
// //         isDomExist.current = false
// //         document.querySelector('body')?.removeChild(dom)
// //       }
// //     }
// //   }, [clearFrame, onClose])

// //   const onOpen = useCallback(() => {
// //     createDom()
// //     if (isOpen.current) {
// //       onClose()
// //     } else {
// //       isOpen.current = true
// //       definedPositionOption()
//       listenerFrame()
//     }
//   }, [createDom, definedPositionOption, listenerFrame, onClose])

//   const onMouseEnter = useCallback(() => {
//     if (
//       refRoot.current?.scrollWidth &&
//       refRoot.current?.clientWidth &&
//       refRoot.current?.scrollWidth > refRoot.current?.clientWidth
//     ) {
//       onOpen()
//     }
//   }, [onOpen])

//   return (
//     <Fragment>
//       <TextOutTooltip
//         ref={refRoot}
//         onMouseEnter={onMouseEnter}
//         onMouseLeave={onClose}
//       >
//         {children}
//       </TextOutTooltip>
//       {createPortal(
//         <TooltipContainer
//           ref={refTooltip}
//           style={{
//             position: 'absolute',
//             zIndex: 9999,
//             backgroundColor: '#2facff',
//             padding: '8px',
//             display: 'none',
//             ...style,
//           }}
//         >
//           <TextBoxTooltip style={{ contain: 'paint', color: 'white' }}>
//             {label}
//           </TextBoxTooltip>
//         </TooltipContainer>,
//         refDom.current,
//       )}
//     </Fragment>
//   )
// }

// export const TextOutTooltip = styled.p`
//   position: relative;
//   display: inline-block;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   width: 100%;
//   cursor: pointer;
// `
// export const TextBoxTooltip = styled.div``

// export const TooltipContainer = styled.div`


// &::before {

//  position: 'absolute',
//               top: '-5px',
//               display: 'var(--flag-before)',
//               borderLeft: '8px solid transparent',
//               borderRight: '8px solid transparent',
//               borderBottom: '8px solid #2facff',
// }

// `
