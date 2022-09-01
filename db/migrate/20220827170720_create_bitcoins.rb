class CreateBitcoins < ActiveRecord::Migration[6.0]
  def change
    create_table :bitcoins do |t|
      t.string :block_hash
      t.string :prev_block
      t.string :time
      t.string :bits

      t.timestamps
    end
  end
end
