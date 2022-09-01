class BitcoinController < ApplicationController
  require 'rest-client'
  require 'json'

  def index
    @bitcoins = Bitcoin.all
  end

  def create
    if params[:block_hash]
      url = "https://blockchain.info/rawblock/#{params[:block_hash]}"
      response = RestClient.get url
      result = JSON.parse response.to_str
      @bitcoin = Bitcoin.new
      @bitcoin.block_hash = result['hash']
      @bitcoin.prev_block = result['prev_block']
      @bitcoin.time = result['time']
      @bitcoin.bits = result['bits']
      if @bitcoin.save
        redirect_to root_path
      end
    else
      redirect_to root_path
      
    end
  end

  def delete
    @bitcoin = Bitcoin.find(params[:id])
    if @bitcoin.destroy
      redirect_to root_path
      
    end
    
    
  end
  
  
end
