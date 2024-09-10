// components/RentalLocations.tsx

const rentalData = [
  { city: 'Canmore', type: 'Pet-friendly rentals' },
  { city: 'Benalmádena', type: 'Flat rentals' },
  { city: 'Marbella', type: 'Cottage rentals' },
  { city: 'Mijas', type: 'House rentals' },
  { city: 'Prescott', type: 'Pet-friendly rentals' },
  { city: 'Scottsdale', type: 'Flat rentals' },
  { city: 'Tucson', type: 'Flat rentals' },
  { city: 'Jasper', type: 'Cabin rentals' },
  { city: 'Ibiza', type: 'Holiday rentals' },
  { city: 'Anaheim', type: 'Family-friendly rentals' },
  { city: 'Monterey', type: 'Flat rentals' },
  { city: 'Mountain View', type: 'Pet-friendly rentals' },
  { city: 'Devonport', type: 'Cottage rentals' },
  { city: 'Mallacoota', type: 'Pet-friendly rentals' },
  { city: 'Paso Robles', type: 'House rentals' },
  { city: 'Santa Barbara', type: 'Beachfront rentals' },
  { city: 'Sonoma', type: 'Pet-friendly rentals' },
];

export default function Upperfooter() {
  return (
    <>
      <div className="upperinnerfooter">
        <div className="con_1 text-xl md:text-2xl font-medium pb-4">
          Inspiration for future getaways
        </div>
        <div className="con_2 text-neutral-500 list-none font-medium flex flex-wrap gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-start pb-3 border-b-2">
          <li className="text-black">Popular</li>
          <li>Arts & culture</li>
          <li>Outdoors</li>
          <li>Mountains</li>
          <li>Beach</li>
          <li>Unique Stays</li>
          <li>Categories</li>
          <li>Things to do</li>
        </div>
      </div>
      <div className="upperinnerlowerfooter mt-6">
        <div className="w-full">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {rentalData.map((rental, index) => (
              <div key={index} className="space-y-1">
                <h3 className="text-md font-semibold text-gray-900">{rental.city}</h3>
                <p className="text-sm text-gray-600">{rental.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
