import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"
import thum from '../../../assets/header-thums/1130986_OQ5CKS0.jpg'
import thumSecond from '../../../assets/header-thums/31692801_7840267.jpg'
import thumThird from '../../../assets/header-thums/34864654_8221043.jpg'

const Carousel = () => {
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )
    
      return (
        <>
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
                <img src={thum} alt="" />
            </div>
            <div className="keen-slider__slide number-slide2">
                <img src={thumSecond} alt="" />
            </div>
            <div className="keen-slider__slide number-slide3">
                <img src={thumThird} alt="" />
            </div>
          </div>
        </>
      )
    }

export default Carousel;