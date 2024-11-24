import { GoogleGenerativeAI } from "google-generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "\nGenerate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: 'I cannot directly access and display images or real-time pricing for hotels.  Hotel prices and availability are dynamic and change constantly.  Therefore, I can\'t provide image URLs or exact pricing.  I can, however, give you a JSON structure with the other information you requested, which you can then populate using hotel booking websites (like Booking.com, Expedia, etc.) and Google Maps.\n\n```json\n{\n  "tripName": "Las Vegas Budget Trip for Couples (3 Days)",\n  "budget": "Cheap",\n  "travelers": 2,\n  "hotels": [\n    {\n      "hotelName": "Hotel Name 1 (Example)",\n      "hotelAddress": "123 Example Street, Las Vegas, NV",\n      "priceRange": "$50-$80 per night (Approximate)", \n      "imageUrl": "Insert Image URL Here",\n      "geoCoordinates": {\n        "latitude": 36.1699,\n        "longitude": -115.1398\n      },\n      "rating": 3.5,\n      "description": "A budget-friendly hotel offering basic amenities.  Good location for exploring the Strip."\n    },\n    {\n      "hotelName": "Hotel Name 2 (Example)",\n      "hotelAddress": "456 Another Street, Las Vegas, NV",\n      "priceRange": "$60-$90 per night (Approximate)",\n      "imageUrl": "Insert Image URL Here",\n      "geoCoordinates": {\n        "latitude": 36.175,\n        "longitude": -115.14\n      },\n      "rating": 4.0,\n      "description": "Slightly more upscale than option 1, still budget-friendly."\n    },\n    {\n      "hotelName": "Hotel Name 3 (Example)",\n      "hotelAddress": "789 Budget Blvd, Las Vegas, NV",\n      "priceRange": "$40-$70 per night (Approximate)",\n      "imageUrl": "Insert Image URL Here",\n      "geoCoordinates": {\n        "latitude": 36.12,\n        "longitude": -115.2\n      },\n      "rating": 3.0,\n      "description": "Basic but clean hotel outside the main strip, good for budget travelers with a car."\n    }\n  ],\n  "itinerary": {\n    "day1": [\n      {\n        "placeName": "The Strip (walking tour)",\n        "placeDetails": "Walk the length of the Strip, admiring the lights and architecture.  Many free attractions along the way.",\n        "imageUrl": "Insert Image URL Here",\n        "geoCoordinates": {\n          "latitude": 36.1146,\n          "longitude": -115.1729\n        },\n        "ticketPricing": "Free",\n        "rating": 4.5,\n        "travelTime": "3-4 hours"\n      },\n      {\n        "placeName": "Bellagio Fountains",\n        "placeDetails": "Watch the spectacular free water show.",\n        "imageUrl": "Insert Image URL Here",\n        "geoCoordinates": {\n          "latitude": 36.1177,\n          "longitude": -115.1712\n        },\n        "ticketPricing": "Free",\n        "rating": 4.8,\n        "travelTime": "1 hour"\n      },\n      {\n        "placeName": "In-N-Out Burger (Dinner)",\n        "placeDetails": "Enjoy a classic and affordable West Coast burger.",\n        "imageUrl": "Insert Image URL Here",\n        "geoCoordinates":{ "latitude": 36.11, "longitude": -115.18},\n        "ticketPricing": "$10-15 per person",\n        "rating": 4.2,\n        "travelTime": "1 hour"\n      }\n    ],\n    "day2": [\n      {\n        "placeName": "Fremont Street Experience",\n        "placeDetails": "Experience the vibrant atmosphere and Viva Vision light show (check showtimes).",\n        "imageUrl": "Insert Image URL Here",\n        "geoCoordinates": {\n          "latitude": 36.167,\n          "longitude": -115.142\n        },\n        "ticketPricing": "Free (Viva Vision is free)",\n        "rating": 4.2,\n        "travelTime": "2-3 hours"\n      },\n      {\n        "placeName": "Container Park",\n        "placeDetails": "Unique shopping and dining experience in repurposed shipping containers.",\n        "imageUrl": "Insert Image URL Here",\n        "geoCoordinates": {\n          "latitude": 36.1642,\n          "longitude": -115.1377\n        },\n        "ticketPricing": "Varies by purchase",\n        "rating": 4.0,\n        "travelTime": "1-2 hours"\n      },\n        {\n        "placeName": "Cheap Eats (Dinner)",\n        "placeDetails": "Explore local buffets or inexpensive restaurants.",\n        "imageUrl": "Insert Image URL Here",\n        "geoCoordinates": {\n          "latitude": 36.16,\n          "longitude": -115.14\n        },\n        "ticketPricing": "$15-20 per person",\n        "rating": 4.0,\n        "travelTime": "1 hour"\n      }\n    ],\n    "day3": [\n      {\n        "placeName": "Seven Magic Mountains",\n        "placeDetails": "Art installation outside of the city (requires transportation – Uber/Lyft recommended).",\n        "imageUrl": "Insert Image URL Here",\n        "geoCoordinates": {\n          "latitude": 36.0673,\n          "longitude": -114.9618\n        },\n        "ticketPricing": "Free",\n        "rating": 4.5,\n        "travelTime": "2-3 hours (including travel time)"\n      },\n      {\n        "placeName": "Red Rock Canyon National Conservation Area (Hike)",\n        "placeDetails": "Enjoy scenic hiking trails (check trail difficulty levels).",\n        "imageUrl": "Insert Image URL Here",\n        "geoCoordinates": {\n          "latitude": 36.18,\n          "longitude": -115.69\n        },\n        "ticketPricing": "Park entrance fee applies",\n        "rating": 4.7,\n        "travelTime": "3-4 hours (depending on chosen hike)"\n      }\n    ]\n  }\n}\n```\n\nRemember to replace the placeholder image URLs, prices, and coordinates with actual data from your research.  Always check the latest pricing and availability before your trip.  This JSON provides a framework you can adapt and customize based on your preferences and the latest information.  Consider using a spreadsheet or a dedicated trip-planning app to manage this data more easily.\n',
        },
      ],
    },
  ],
});
