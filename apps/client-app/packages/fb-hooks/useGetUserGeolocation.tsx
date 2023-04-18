import { useEffect, useState } from "react";

interface UserGeolocation {
  latitude?: number;
  longitude?: number;
}

const initialState: UserGeolocation = {
  latitude: 0,
  longitude: 0
};

const useGetUserGeolocation = () => {
  const [dataGeolocation, setDataGeolocation] =
    useState<UserGeolocation>(initialState);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          const { latitude, longitude } = position.coords;
          setDataGeolocation({
            latitude,
            longitude
          });
        }
      );
    }
  }, []);

  return {
    ...dataGeolocation
  };
};

export default useGetUserGeolocation;
