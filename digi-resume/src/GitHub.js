import React, { useState, useEffect } from 'react';

const GitHub = () => {
  const [contributions, setContributions] = useState({});
  const username = 'manosundarmanivel';
  const accessToken = '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';
  
  useEffect(() => {
    const fetchData = async () => {
      const query = `
        {
          user(login: "${username}") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
              }
              totalCommitContributions
              totalIssueContributions
              totalPullRequestContributions
              totalPullRequestReviewContributions
              totalRepositoriesWithContributedCommits
              totalRepositoriesWithContributedIssues
              totalRepositoriesWithContributedPullRequests
              totalRepositoriesWithContributedPullRequestReviews
            }
          }
        }
      `;

      try {
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        });

        const responseData = await response.json();
        setContributions(responseData.data.user.contributionsCollection);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>GitHub Contributions</h1>
      <p>Total contributions: {contributions.contributionCalendar?.totalContributions}</p>
      {/* Display other contribution metrics */}
    </div>
  );
};

export default GitHub;