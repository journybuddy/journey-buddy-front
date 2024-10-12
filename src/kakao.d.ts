declare namespace kakao {
    namespace maps {
      class LatLng {
        constructor(latitude: number, longitude: number);
      }
  
      class Map {
        constructor(container: HTMLElement, options: { center: LatLng; level: number });
        setCenter(latlng: LatLng): void;
        setBounds(bounds: LatLngBounds): void;
      }
  
      class Marker {
        constructor(options: { position: LatLng; map: Map; title?: string; image?: MarkerImage });
        setMap(map: Map | null): void;
      }
  
      class MarkerImage {
        constructor(src: string, size: Size);
      }
  
      class Polyline {
        constructor(options: {
          map: Map;
          path: LatLng[];
          strokeWeight: number;
          strokeColor: string;
          strokeOpacity: number;
          strokeStyle: string;
        });
        setMap(map: Map | null): void;
      }
  
      class LatLngBounds {
        extend(latlng: LatLng): void;
      }
  
      class Size {
        constructor(width: number, height: number);
      }
  
      namespace event {
        function addListener(target: Marker, type: string, handler: () => void): void;
      }
    }
  }
  
  interface Window {
    kakao: typeof kakao;
  }
  