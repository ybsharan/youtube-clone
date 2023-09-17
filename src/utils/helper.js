export const LIVE_CHATTING_NAME = 'You';

export function generateRandomName() {
  // const names = [
  //   'Sharan',
  //   'Nitansh',
  //   'Aarav',
  //   'Anaya',
  //   'Advait',
  //   'Aahana',
  //   'Aryan',
  //   'Ishita',
  //   'Vihaan',
  //   'Myra',
  //   'Kabir',
  //   'Aaradhya',
  //   'Aarush',
  //   'Anika',
  //   'Arjun',
  //   'Saisha',
  //   'Reyansh',
  //   'Avni',
  //   'Vivaan',
  //   'Kiara',
  //   'Rudra',
  //   'Riya',
  //   'Vihaana',
  //   'Ayaan',
  //   'Sanya',
  //   'Ishaan',
  //   'Aisha',
  //   'Aadi',
  //   'Siya',
  //   'Veer',
  //   'Aanya',
  //   'Rohan',
  //   'Anvi',
  //   'Kian',
  //   'Zara',
  //   'Isha',
  //   'Yash',
  //   'Aarna',
  //   'Hridhaan',
  //   'Tara',
  //   'Rehaan',
  //   'Aarohi',
  //   'Aariz',
  //   'Aahira',
  //   'Kabira',
  //   'Dhriti',
  // ];
  const names = [
    'Sharan Nitansh',
    'Aarav Anaya',
    'Advait Aahana',
    'Aryan Ishita',
    'Vihaan Myra',
    'Kabir Aaradhya',
    'Aarush Anika',
    'Arjun Saisha',
    'Reyansh Avni',
    'Vivaan Kiara',
    'Rudra Riya',
    'Vihaana Ayaan',
    'Sanya Ishaan',
    'Aisha Aadi',
    'Siya Veer',
    'Aanya Rohan',
    'Anvi Kian',
    'Zara Isha',
    'Yash Aarna',
    'Hridhaan Tara',
    'Rehaan Aarohi',
    'Aariz Aahira',
    'Kabira Dhriti',
    'Akshay Neha',
    'Nikhil Pooja',
    'Amita Rajesh',
    'Vikram Rekha',
    'Priyanka Arvind',
    'Ramesh Sheetal',
    'Meena Kamal',
    'Anil Sunita',
    'Nisha Ravi',
    'Rajat Ritu',
    'Vishal Neetu',
    'Manoj Preeti',
    'Ajay Anjali',
    'Sarita Sandeep',
    'Alok Kavita',
    'Sanjay Kusum',
    'Gaurav Swati',
    'Nitin Priya',
    'Amit Rita',
  ];
  return names[Math.floor(Math.random() * names.length)];
}

const COMMENTS_MAX_WORDS = 5;

export function generateRandomComment() {
  const comments = [
    'Great job! 🚀',
    'You look amazing! 🙌',
    'Well done!🕵️',
    "You're awesome!",
    'Nice work! 👍',
    'Beautiful picture!',
    'Keep it up! 👌',
    "You're the best! 🚀",
    'Fantastic job!✍️',
    'Impressive work! 👌',
    'Outstanding work!',
    'Simply fantastic! 🚀',
    'You nailed it!🙏',
    'Bravo, well done! 👌',
    'Excellent performance!',
    "You're incredible!🙏",
    'Amazing job!👏',
    'Top-notch work! 🚀',
    'So impressive!',
    'Great effort! 👍',
    "You're a star!",
    'Fantastic job! 🚀',
    'Superb work!👏',
    'Exceptional work!🙏',
    'Wonderful job!',
    "You're remarkable!🙏",
    'Terrific work!✍️',
    'Outstanding job! 👌',
    "You're the best!",
    'Impressive job! 🚀',
    'A job well done!👏',
    'Keep it up!✍️',
    'Well executed!🙏',
    "You're a champ!🚀",
    'Marvelous work!',
    'Perfectly done! 👌',
    "You're outstanding!🙏",
    'Exceptional effort!',
    'Kudos to you!✍️',
    'Brilliant work!👏',
    'Masterful job!✌️',
    "You're awesome!",
    'Excellent job! 🚀',
    'Hats off to you!',
    'Stellar work!✍️',
    "You're a genius!🙏",
    'Phenomenal job! 👍',
    'Splendid work!',
    "You're remarkable!",
    'Outstanding effort! 👌',
    'Great accomplishment!',
    "You're a winner!✌️",
    'Admirable work!🙏',
    'First-rate job!✍️',
    'Exceptional talent! 👍',
    "You're a legend!",
    'Splendid effort!🚀',
    'Truly remarkable!✌️',
    'Bravo, bravo! 👌',
    "You're a superstar!🙏",
  ];

  const comment = comments[Math.floor(Math.random() * comments.length)];

  // Split the comment into words
  const words = comment.split(' ');

  // Ensure the comment has at most maxWords
  const truncatedWords = words.slice(0, COMMENTS_MAX_WORDS);

  // Join the truncated words to form the comment
  const truncatedComment = truncatedWords.join(' ');

  return truncatedComment;
}

export const formatLikeCount = (count) => {
  if (count >= 1000) {
    return Math.floor(count / 1000) + 'K';
  }
  return count;
};

export const calculateTimeDifference = (publishedDate) => {
  const currentDate = new Date();
  const publishedDateObj = new Date(publishedDate);
  const timeDifference = currentDate - publishedDateObj;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  }
};

export function generateRandomLike() {
  return Math.floor(Math.random() * (1 + 100 - 1)) + 1;
}

export function generateRandomViews() {
  return Math.floor(Math.random() * (1 + 300 - 1)) + 1;
}

export function generateRandomDate() {
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);
  const date = new Date(timestamp);

  // Get day, month, and year components
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = date.getFullYear();

  // Format as "dd/mm/yyyy"
  const formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

export const formatViewCount = (count) => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'M';
  } else if (count >= 1000) {
    return (count / 1000).toFixed(0) + 'k';
  } else {
    return count.toString();
  }
};
export const formatSubscriberCount = (count) => {
  if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + 'M';
  } else if (count >= 1000) {
    return (count / 1000).toFixed(0) + 'k';
  } else {
    return count.toString();
  }
};
