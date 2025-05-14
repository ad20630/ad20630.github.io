import GitHubCalendar from 'react-github-calendar';

export default function GithubCalendar()
{
    return(
<div className="ring-2 ring-emerald-100 content-center p-4 relative z-20 isolate">
    <span className="font-sans flex gap-2 mb-2">@ad20630 on Github</span>
    <GitHubCalendar username="ad20630" />
</div>
)
}