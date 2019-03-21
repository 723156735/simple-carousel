declare type TweenFunc = 'Linear' | 'Quad.easeIn' | 'Quad.easeOut' | 'Quad.easeInOut' | 'Cubic.easeIn' | 'Cubic.easeOut' | 'Cubic.easeInOut' | 'Quart.easeIn' | 'Quart.easeOut' | 'Quart.easeInOut' | 'Quint.easeIn' | 'Quint.easeOut' | 'Quint.easeInOut' | 'Sine.easeIn' | 'Sine.easeOut' | 'Sine.easeInOut' | 'Expo.easeIn' | 'Expo.easeOut' | 'Expo.easeInOut' | 'Circ.easeIn' | 'Circ.easeOut' | 'Circ.easeInOut' | 'Elastic.easeIn' | 'Elastic.easeOut' | 'Elastic.easeInOut' | 'Back.easeIn' | 'Back.easeOut' | 'Back.easeInOut' | 'Bounce.easeIn' | 'Bounce.easeOut' | 'Bounce.easeInOut';
interface CarouselOption {
    width?: string;
    height?: string;
    element: string;
    duration?: number;
    tween?: TweenFunc;
    pagination?: boolean;
    arrowButton?: boolean;
    momentum?: number;
    autoplay?: boolean;
    autoplayDelay?: number;
    scale?: boolean;
    customStyles: CarouselStyles;
}
declare type CarouselStyles = {
    [index: string]: any;
    imgClass?: string | string[];
    paginationClass?: string | string[];
    dotClass?: string | string[];
    prevButtonClass?: string | string[];
    nextButtonClass?: string | string[];
};
declare class Carousel {
    private readonly carouselWrapper;
    private readonly carouselWidth;
    private readonly duration;
    private readonly tween;
    private readonly minOffset;
    private readonly momentum;
    private readonly imgLength;
    private readonly autoplay;
    private readonly autoplayDelay;
    private readonly enableScale;
    private scrollEle;
    private startInfo;
    private moveInfo;
    private prevOffset;
    private currentOffset;
    private currentIndex;
    private dotsIndex;
    private dots;
    private sliders;
    private animateTimer;
    private animateCompleted;
    private autoplayTimer;
    private prevScale;
    private scale;
    constructor(imgList: string[], options: CarouselOption);
    destroy: () => void;
    private onClickButton;
    private onDragStart;
    private onDragMove;
    private onDragEnd;
    private setDotsIndex;
    private autoPlay;
    private animate;
}
export default Carousel;
