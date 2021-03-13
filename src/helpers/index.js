export function recommendationLogic (post, quantity) {
  // First check if there are products saved in state (presumbably will be)
  // If not will have to make a separate API request to prismic
  // Take all the filters from the post - filter_tech and filter_category
  // First check if there are any other products which match all tech and all categories exactly and return those
  // Then check next highest e.g 2/2 tech & 1/2 categories = 3 score
  // Keep repeating this process going to lower and lower scores until {quantity} amount is reached
  // Return those products sorted with highest score at start of array
}