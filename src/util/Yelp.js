const apiKey = 'UYI3W0YgzwQXSwjm7-3PhKzebDfXv4XkyfO51U2pAYqsoiDdYQ1R2ia-Rwx68v5Ts2k624r-S_73o4-EakVpl0pta7UrEtetJvrtNr1dnW7K1Wza1OqFNOk3-vW-Y3Yx';

const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
    {
        headers: {
            Authorization: `Bearer ${apiKey}`
        }
    }).then(response => {
        return response.json();
    }).then(jsonResponse => {
        if(jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count,
                }
            })
        }
    })
  }
};

export default Yelp;

