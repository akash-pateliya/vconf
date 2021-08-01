package mypack;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Segment
{
	private int SegmentId;
	private String SegmentName;
	private int MinQty;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	public int getSegmentId() {
		return SegmentId;
	}
	public int getMinQty() {
		return MinQty;
	}
	public void setMinQty(int minQty) {
		MinQty = minQty;
	}
	public void setSegmentId(int segmentId) {
		SegmentId = segmentId;
	}
	public String getSegmentName() {
		return SegmentName;
	}
	public void setSegmentName(String segmentName) {
		SegmentName = segmentName;
	}
	
	
}
