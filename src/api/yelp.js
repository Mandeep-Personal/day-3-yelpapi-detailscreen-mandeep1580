import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer bE96sZ9a_ZNEQCs9J4p0O3kPky_fHgbv5x6af6dPELNl7fdI9_ImBLGkUHcTyPo3ynxZI_96XLUIYr74mUJ15WQTSerAhDgB6E1KnvATHb4pk_z3yfYbAMI4ceNnYHYx'
  }
})