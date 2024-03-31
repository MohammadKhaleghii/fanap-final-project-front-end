export interface SliderInput {
  mobile: MobileSlider;
  desktop: DesktopSlider;
}

export interface MobileSlider {
  id: number;
  title: string;
  imagePath: string;
}

export interface DesktopSlider {
  id: number;
  title: string;
  imagePath: string;
}
