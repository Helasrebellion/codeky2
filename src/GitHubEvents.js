import React, { useEffect, useState } from 'react';
import './github.css';
import ReactCalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const GitHubEvents = ({ username }) => {
  const [commits, setCommits] = useState(0);
  const [totalRepos, setTotalRepos] = useState(0);
  const [contributionData, setContributionData] = useState([]);

  const fetchData = async () => {
    const userUrl = `https://api.github.com/users/${username}`;
    const userResponse = await fetch(userUrl).then((res) => res.json());
    setTotalRepos(userResponse.public_repos);

    const eventsUrl = `https://api.github.com/users/${username}/events/public`;
    const events = await fetch(eventsUrl).then((res) => res.json());
    const commitCount = events.filter((event) => event.type === 'PushEvent').length;
    setCommits(commitCount);

    // Get the data for each day of the year with count as 0 initially
    const startDate = new Date('2023-01-01');
    const endDate = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    const totalDays = Math.round(Math.abs((startDate - endDate) / oneDay));
    const data = Array.from({ length: totalDays }, (_, i) => ({
      date: new Date(startDate.getTime() + i * oneDay),
      count: 0,
    }));

    // Update the count for each day based on GitHub events
    events.forEach((event) => {
      if (event.type === 'PushEvent') {
        const eventDate = new Date(event.created_at).toDateString();
        const index = data.findIndex((d) => d.date.toDateString() === eventDate);
        if (index !== -1) {
          data[index].count++;
        }
      }
    });

    setContributionData(data);
  };

  useEffect(() => {
    fetchData();
  }, [username]);

  return (
    <div className="github-events-container">
      <div className="event-summary">
        <p>Total Commits: {commits}</p>
        <p>Total Repositories: {totalRepos}</p>
      </div>
      <div className="github-contrib-chart">
        <ReactCalendarHeatmap
          values={contributionData}
          startDate={new Date('2022-01-01')}
          endDate={new Date()}
          classForValue={(value) => {
            if (!value) {
              return 'color-gitlab-0';
            }
            const commitCount = value.count || 0;
            if (commitCount >= 51) {
              return 'color-gitlab-100';
            } else if (commitCount >= 41) {
              return 'color-gitlab-50';
            } else if (commitCount >= 31) {
              return 'color-gitlab-40';
            } else if (commitCount >= 21) {
              return 'color-gitlab-30';
            } else if (commitCount >= 11) {
              return 'color-gitlab-20';
            } else if (commitCount >= 6) {
              return 'color-gitlab-10';
            } else if (commitCount >= 1) {
              return 'color-gitlab-05';
            } else {
              return 'color-gitlab-0';
            }
          }}
          tooltipDataAttrs={(value) => {
            const date = value.date ? value.date.toISOString().slice(0, 10) : '';
            const count = value.count || 0;
            return {
              'data-tip': `${date} has count: ${count}`,
            };
          }}
        />
      </div>
    </div>
  );
};

export default GitHubEvents;
