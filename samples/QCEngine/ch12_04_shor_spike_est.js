// Programming Quantum Computers
//   by Eric Johnston, Nic Harrigan and Mercedes Gimeno-Segovia
//   O'Reilly Media

// To run this online, go to http://oreilly-qc.github.io?p=12-4
// Note: This sample may vary slightly from the text in the book,
// due to revisions or aesthetic tweaks.


var spike_position = 8;
var data_range = 16;

var num_spikes = estimate_num_spikes(spike_position, data_range);

qc.print('Estimated number of spikes: ' + num_spikes + '\n');

function estimate_num_spikes(spike, range)
{
    if (spike < range / 2)
        spike = range - spike;
    best_error = 1.0;
    e0 = 0, e1 = 0, e2 = 0;
    actual = spike / range;
    candidates = []
    for (denom = 1.0; denom < spike; ++denom)
    {
        numerator = Math.round(denom * actual);
        estimated = numerator / denom;
        error = Math.abs(estimated - actual);
        e0 = e1;
        e1 = e2;
        e2 = error;
        // Look for a local minimum which beats our current best error
        if (e1 <= best_error && e1 < e0 && e1 < e2)
        {
            repeat_period = denom - 1;
            candidates.push(denom - 1);
            best_error = e1;
        }
    }
    return candidates;
}
