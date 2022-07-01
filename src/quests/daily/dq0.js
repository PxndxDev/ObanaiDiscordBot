const DailyQuest = require("../bases/DailyQuest");
const InspectZone = require("../bases/superobjectives/InspectZone");

module.exports = step => {
    const q = [
        new DailyQuest(
            "Que vous progressez vite ! (Part. 1)",
            "Mmh, bite !",
            new InspectZone("gugus", "4", "seed", "Graines", "materials", 40, 4, 0),
            "dq0:0",
            0,
        ),
    ];

    return step < q.length ? q[Number(step)] : true;
};