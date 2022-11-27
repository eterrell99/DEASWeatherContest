import React, { useState } from 'react';

function Period1({ formData, setFormData }) {
  const handleTempChange = (e) => {
    setFormData({ ...formData, lowTempP1: e.target.value });
  };

  const handleZeroChange = (e) => {
    setFormData({ ...formData, PercipZeroToTraceP1: e.target.value });
  };
  const handleTraceChange = (e) => {
    setFormData({ ...formData, PercipZeroToTraceP1: e.target.value });
  };
  const handleFourteenChange = (e) => {
    setFormData({ ...formData, Percip06To14P1: e.target.value });
  };
  const handleTwentyFourChange = (e) => {
    setFormData({ ...formData, Percip15To24P1: e.target.value });
  };
  const handleFortyNineChange = (e) => {
    setFormData({ ...formData, Percip25To49P1: e.target.value });
  };
  const handleFiftyChange = (e) => {
    setFormData({ ...formData, Percip50PlusP1: e.target.value });
  };

  return (
    <div className="period-1-container">
      <div className="entries-1">
        <br />
        <p>Low Temp</p>
        <input
          type="text"
          value={formData.lowTempP1}
          onChange={handleTempChange}
        />
        <p>Precip for 0 or Trace</p>
        <select
          name="percent-chance"
          onChange={handleZeroChange}
          value={formData.PercipZeroToTraceP1}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <p>Precip for Trace to 0.05"</p>
        <select
          name="percent-chance"
          onChange={handleTraceChange}
          value={formData.PercipTraceTo005P1}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <p>Precip for 0.06" to 0.14"</p>
        <select
          name="percent-chance"
          onChange={handleFourteenChange}
          value={formData.Percip06To14P1}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <p>Precip for 0.15" to 0.24"</p>
        <select
          name="percent-chance"
          onChange={handleTwentyFourChange}
          value={formData.Percip15To24P1}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <p>Precip for 0.25" to 0.49"</p>
        <select
          name="percent-chance"
          onChange={handleFortyNineChange}
          value={formData.Percip25To49P1}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <p>Precip for 0.50" or more</p>
        <select
          name="percent-chance"
          onChange={handleFiftyChange}
          value={formData.Percip50PlusP1}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  );
}

export default Period1;
