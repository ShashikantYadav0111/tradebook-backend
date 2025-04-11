import { Trade } from "../models/Trade.model.js";

export const addTrade = async (req, res) => {
    const { symbol, entry, exit, quantity, profit, notes, exitDate, target, stoploss,traderId } = req.body;
    try {
        const trade = new Trade({ symbol, entry, exit, quantity, profit, notes, exitDate, target, stoploss,traderId });
        await trade.save();
        res.status(200).json({
            success: true,
            message: "Trade Added",
            data: {
                ...trade._doc
            }
        })
    } catch (error) {
        console.error(error.message);
        res.status(400).json({
            success: false,
            message: "Something went wrong"
        })
    }

}

export const getAllTradesForUser = async (req, res) => {
    const traderId = req.params.traderId;
    try {
        const trades = await Trade.find({ traderId }, "-updatedAt -__v");
        if (!trades) {
            console.log("Couldnot fetch trades");
            throw new Error("No trades found!")
        }
        res.status(200).json(trades.map(trade => ({
            symbol: trade.symbol,
            entry: trade.entry,
            exit: trade.exit,
            createdAt: trade.createdAt,
            exitDate: trade.exitDate,
            notes: trade.notes,
            quantity: trade.quantity,
            stoploss: trade.stoploss,
            target: trade.target,
            profit: (trade.exit - trade.entry) * trade.quantity
        })))
    } catch (error) {
        console.error(error.message);
        res.status(400).json({
            success: false,
            message: "Some thing went wrong"
        })
    }


}
