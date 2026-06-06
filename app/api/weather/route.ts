import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { city } = body;

    if (!city) {
      return NextResponse.json(
        { error: "City is required." },
        { status: 400 }
      );
    }

    const geoResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
        city
      )}&count=1&language=en&format=json`
    );

    const geoData = await geoResponse.json();

    if (!geoData.results || geoData.results.length === 0) {
      return NextResponse.json(
        { error: "City not found. Try another city." },
        { status: 404 }
      );
    }

    const location = geoData.results[0];

    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,wind_speed_10m,relative_humidity_2m`
    );

    const weatherData = await weatherResponse.json();

    return NextResponse.json(
      {
        city: location.name,
        country: location.country,
        temperature: weatherData.current.temperature_2m,
        windSpeed: weatherData.current.wind_speed_10m,
        humidity: weatherData.current.relative_humidity_2m,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong while fetching weather." },
      { status: 500 }
    );
  }
}