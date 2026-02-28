import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const FollowerChart = () => {
    const followerData = [
        { day: 1, followers: 10500 },
        { day: 5, followers: 10800 },
        { day: 10, followers: 11200 },
        { day: 15, followers: 11100 },
        { day: 20, followers: 11600 },
        { day: 25, followers: 12200 },
        { day: 30, followers: 12800 }
    ];

    return (
        <div
            style={{
                width: '100%',
                height: 150,
                marginTop: '-5px',
                outline: 'none',
                WebkitTapHighlightColor: 'transparent',
                userSelect: 'none'
            }}
            onMouseDown={(e) => e.preventDefault()}
            className='lineChart'
        >
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={followerData}>
                    <Line
                        type="monotone"
                        dataKey="followers"
                        stroke="#D7F073" // Updated line color
                        strokeWidth={2}
                        dot={{ fill: '#D7F073', strokeWidth: 2, r: 3 }}
                        activeDot={{ r: 4, fill: '#D7F073' }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FollowerChart;
